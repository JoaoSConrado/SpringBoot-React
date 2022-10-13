package br.com.api.controlesoftware.vo;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;

public class ControleSoftwareVO {
	
	private Long id;
	
	@JsonFormat(pattern = "dd-MM-yyyy HH:mm:ss", shape = JsonFormat.Shape.STRING)
	private LocalDateTime registraData;

	@NotBlank
	@Size(max = 11)
	private String cpfCliente;

	@NotBlank
	private String nomeCliente;

	@NotBlank
	private String telefoneCliente;

	@NotBlank
	private String SoftwareDesejado;

	@NotBlank
	private String valorSoftware;

	@NotBlank
	private String desenvolvedor;

	@NotBlank
	private String dataEntrega;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDateTime getRegistraData() {
		return registraData;
	}

	public void setRegistraData(LocalDateTime registraData) {
		this.registraData = registraData;
	}

	public String getCpfCliente() {
		return cpfCliente;
	}

	public void setCpfCliente(String cpfCliente) {
		this.cpfCliente = cpfCliente;
	}

	public String getNomeCliente() {
		return nomeCliente;
	}

	public void setNomeCliente(String nomeCliente) {
		this.nomeCliente = nomeCliente;
	}

	public String getTelefoneCliente() {
		return telefoneCliente;
	}

	public void setTelefoneCliente(String telefoneCliente) {
		this.telefoneCliente = telefoneCliente;
	}

	public String getSoftwareDesejado() {
		return SoftwareDesejado;
	}

	public void setSoftwareDesejado(String softwareDesejado) {
		SoftwareDesejado = softwareDesejado;
	}

	public String getValorSoftware() {
		return valorSoftware;
	}

	public void setValorSoftware(String valorSoftware) {
		this.valorSoftware = valorSoftware;
	}

	public String getDesenvolvedor() {
		return desenvolvedor;
	}

	public void setDesenvolvedor(String desenvolvedor) {
		this.desenvolvedor = desenvolvedor;
	}

	public String getDataEntrega() {
		return dataEntrega;
	}

	public void setDataEntrega(String dataEntrega) {
		this.dataEntrega = dataEntrega;
	}	
	
	

}
