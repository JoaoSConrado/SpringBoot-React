package br.com.api.controlesoftware.entity;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "TB_CONTROLE_SOFTWARE")
public class ControleSoftwareEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 11)
	private String cpfCliente;

	@Column(nullable = false, length = 130)
	private String nomeCliente;

	@Column(nullable = false, length = 11)
	private String telefoneCliente;

	@Column(nullable = false, length = 130)
	private String SoftwareDesejado;

	@Column(nullable = false, length = 30)
	private String valorSoftware;
	
	@Column(nullable = false, length = 130)
	private String desenvolvedor;

	@Column(nullable = false, length = 30)
	private String dataEntrega;
	
	@Column(nullable = false)
	private LocalDateTime registraData;


	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public LocalDateTime getRegistraData() {
		return registraData;
	}

	public void setRegistraData(LocalDateTime registraData) {
		this.registraData = registraData;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	
	

}
