package com.example.demo.dao;

import java.util.List;

import com.example.demo.model.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    // public OrderDAO (JdbcTemplate jdbcTemplate){
    //     this.jdbcTemplate = jdbcTemplate;
    // }
    
    public List<Order> getOrders(){
        String sql = "SELECT * FROM orders";
        List <Order> listOrders = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(Order.class));
        return listOrders;
    }

    public Order getOrder(int id){
        String sql = "SELECT * FROM orders WHERE id = " + id;
        Order order = jdbcTemplate.queryForObject(sql, BeanPropertyRowMapper.newInstance(Order.class));
        return order;
    }

    public void deleteOrder (int id){
        String sql = "DELETE FROM orders WHERE id = " + id;
        int result = jdbcTemplate.update(sql);
        if (result > 0){
            System.out.println("Delete id " + id + " successfully.");
        }
    }

    public void addOrder(Order order){
        String sql = "INSERT INTO orders (order_id, product_name, product_quantity) VALUES (?, ?, ?)";
        int result = jdbcTemplate.update(sql, order.getOrder_id(), order.getProduct_name(), order.getProduct_quantity());
        if (result > 0) {
            System.out.println("Insert successfully.");
        }  
    }

}
