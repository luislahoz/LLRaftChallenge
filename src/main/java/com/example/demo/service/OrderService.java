package com.example.demo.service;

import java.util.List;

import com.example.demo.dao.OrderDAO;
import com.example.demo.model.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class OrderService {
    
    @Autowired
    private OrderDAO orderDao;
    
    @Transactional
    public List<Order> get() {
        return orderDao.getOrders();
    }

    @Transactional
    public Order get(int id){
        return orderDao.getOrder(id);
    }

    @Transactional
    public Order save(Order order){
        // System.out.println("ORDER SERVICE SAVE - " + order);
        return orderDao.addOrder(order);
    }

    @Transactional
    public Order delete(int id){
        // System.out.println("Removed order " + id);
        return orderDao.deleteOrder(id);
    }
}
