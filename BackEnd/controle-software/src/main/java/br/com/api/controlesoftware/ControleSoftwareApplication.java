package br.com.api.controlesoftware;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ControleSoftwareApplication {

	public static void main(String[] args) {
		SpringApplication.run(ControleSoftwareApplication.class, args);
	}

}
	