package com.example.demo.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.model.Order;
import com.example.demo.service.OrderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@CrossOrigin(value = "http://localhost:3000")
@RequestMapping("/api")
public class OrderController {
    
    @Autowired
    private OrderService orderService;
    
    @GetMapping("/order")
    public List<Order> get() {
        return orderService.get();
    }
    
    @PostMapping("/order")
    public Order save(@RequestBody Order order) {
        orderService.save(order);
        return order;
    }
    
    @GetMapping("/order/{id}")
    public ResponseEntity<?> get(@PathVariable int id) {
        Order order = orderService.get(id);
        if(order != null){
            return new ResponseEntity<>(orderService.get(id), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        
    }
    
    @DeleteMapping("/order/{id}")
    public ResponseEntity<?> delete(@PathVariable int id) {
        Order order = orderService.delete(id);
        if (order != null){
            return new ResponseEntity<>(order, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @PutMapping("/order")
    public ResponseEntity<?> update(@RequestBody Order order) {
        return new ResponseEntity<>(orderService.save(order), HttpStatus.OK);
    }

    @PostMapping(value = "/uploadfile")
    public ResponseEntity<?>  uploadFile(@RequestParam("file") MultipartFile file, RedirectAttributes redirectAttributes){
        if (file == null ){
            System.out.println("File null - " + file);
        } else {
            System.out.println("File with content - " + file.getOriginalFilename());
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()));
                ArrayList<Order> orderList = new ArrayList<Order>();

                while(reader.ready()) {
                    String line = reader.readLine().replaceAll("\\s+","") ;
                    String[] orderItems = line.split("\\|");
                    if (orderItems.length == 3){
                        Order order = new Order();
                        order.setOrder_id(Integer.parseInt(orderItems[0]));
                        order.setProduct_name(orderItems[1]);
                        order.setProduct_quantity(Integer.parseInt(orderItems[2]));
                        orderList.add(orderService.save(order));
                    }
               }
               return new ResponseEntity<>(orderList, HttpStatus.OK);

            } catch (IOException e) {
                System.out.println("Upload Error "+ e.getMessage());
            }
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
