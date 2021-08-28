// package demo.src.main.java.com.example.demo;

// import java.io.BufferedReader;
// import java.io.IOException;
// import java.nio.charset.StandardCharsets;
// import java.nio.file.Files;
// import java.nio.file.Path;
// import java.nio.file.Paths;
// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;
// import java.util.Properties;
// import java.util.logging.Level;
// import java.util.logging.Logger;

// import org.springframework.boot.autoconfigure.SpringBootApplication;

// @SpringBootApplication
// public class App 
// {
//     public static void main( String[] args )
//     {
//         System.out.println( "Hello World!" );

//         Properties props = readProperties();

//         String url = props.getProperty("db.url");
//         String user = props.getProperty("db.user");
//         String passwd = props.getProperty("db.passwd");

//         try (Connection con = DriverManager.getConnection(url, user, passwd);
//                 // PreparedStatement pst = con.prepareStatement("SELECT * FROM Authors");
//                 PreparedStatement pst = con.prepareStatement("SELECT * FROM pg_stat_activity");
//                 ResultSet rs = pst.executeQuery()) {

//             while (rs.next()) {
//                 System.out.print(rs.getInt(1));
//                 System.out.print(": ");
//                 System.out.println(rs.getString(2));
//             }

//         } catch (SQLException ex) {
//             Logger lgr = Logger.getLogger(
//                 App.class.getName());
//             lgr.log(Level.SEVERE, ex.getMessage(), ex);
//             // System.out.println("PROBLEM 2 - " + ex.getMessage());
//         }
//     }

//     public static Properties readProperties() {

//         Properties props = new Properties();
//         Path myPath = Paths.get("src/main/resources/db.properties");

//         try {
//             BufferedReader bf = Files.newBufferedReader(myPath, 
//                 StandardCharsets.UTF_8);

//             props.load(bf);
//         } catch (IOException ex) {
//             Logger.getLogger(App.class.getName()).log(
//                     Level.SEVERE, null, ex);
//             // System.out.println("PROBLEM 1 - " + ex.getMessage());
//         }

//         return props;
//     }
// }