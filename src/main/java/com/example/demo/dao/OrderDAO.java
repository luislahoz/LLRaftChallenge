package com.example.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.example.demo.model.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

@Repository
public class OrderDAO {

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
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

    public Order deleteOrder (int id){
        Order order = getOrder(id);
        String sql = "DELETE FROM orders WHERE id = " + id;
        int result = jdbcTemplate.update(sql);
        if (result > 0){
            System.out.println("Delete id " + id + " successfully.");
        }
        return order;
    }

    public Order addOrder(Order order){
        String sql = "INSERT INTO orders (order_id, product_name, product_quantity) VALUES (" 
                + order.getOrder_id() + ",'" 
                + order.getProduct_name() + "'," 
                + order.getProduct_quantity() + ")";
 
        KeyHolder keyHolder = new GeneratedKeyHolder();

        jdbcTemplate.update(
            new PreparedStatementCreator() {
                public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                    return connection.prepareStatement(sql, new String[] {"id"});
                }
            }, keyHolder);

        order.setId(keyHolder.getKey().intValue());
    
        return order;
    }

}
