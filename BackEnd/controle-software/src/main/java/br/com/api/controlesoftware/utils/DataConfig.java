package br.com.api.controlesoftware.utils;

import java.time.format.DateTimeFormatter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

@Configuration
public class DataConfig {

	public static final String DATETIME_FORMAT = "dd-MM-yyyy HH:mm:ss";
	public static LocalDateTimeSerializer LOCAL_DATETIME_SERIALIZER = new LocalDateTimeSerializer(
			DateTimeFormatter.ofPattern(DATETIME_FORMAT));

	@Bean
	@Primary
	public ObjectMapper objectMapper() {
		JavaTimeModule module = new JavaTimeModule();
		module.addSerializer(LOCAL_DATETIME_SERIALIZER);
		return new ObjectMapper().registerModule(module);
	}

}