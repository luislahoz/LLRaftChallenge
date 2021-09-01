package com.example.demo.model;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Order {
    private int id;
    private int order_id;
    private String product_name;
    private int product_quantity;
}
