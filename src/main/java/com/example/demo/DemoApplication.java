package com.example.demo;



// import java.util.List;
// import java.util.Map;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	// @Autowired
    // private JdbcTemplate jdbcTemplate;

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception {

        // String sql = "INSERT INTO orders (order_id, product_name, product_quantity) VALUES (2, 'eggs', 20)";
        System.out.println(args);
        // OrderController controller = new OrderController(jdbcTemplate);
        // controller.deleteOrder(4);

		// String sql = "SELECT column_list FROM table";
		
		// int rows = jdbcTemplate.update(sql);
        // if (rows > 0) {
        //     System.out.println("A new row has been inserted.");
        // }
    }

}
