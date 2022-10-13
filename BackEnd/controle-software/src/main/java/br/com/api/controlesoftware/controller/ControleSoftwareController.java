package br.com.api.controlesoftware.controller;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.api.controlesoftware.entity.ControleSoftwareEntity;
import br.com.api.controlesoftware.service.ControleSoftwareService;
import br.com.api.controlesoftware.vo.ControleSoftwareVO;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
@RequestMapping("/controle-software")
public class ControleSoftwareController {

	@Autowired
	ControleSoftwareService controleSoftwareService;

	@PostMapping
	public ResponseEntity<Object> salvarControleSoftware(
			@RequestBody @Valid ControleSoftwareVO controleSoftwareVO) {

		if (controleSoftwareService.existsByCpfCliente(controleSoftwareVO.getCpfCliente())) {
			return ResponseEntity.status(HttpStatus.CONFLICT)
					.body("ERRO: Já existe um cadastro com esse CPF informado!");
		}

		var controleSoftwareEntity = new ControleSoftwareEntity();
		BeanUtils.copyProperties(controleSoftwareVO, controleSoftwareEntity);
		controleSoftwareEntity.setRegistraData(LocalDateTime.now(ZoneId.of("America/Sao_Paulo")));
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(controleSoftwareService.salvar(controleSoftwareEntity));
	}

	@GetMapping
	public ResponseEntity<Page<ControleSoftwareEntity>> getAllControleSoftware(
			@PageableDefault(page = 0, size = 10, sort = "registraData", direction = Sort.Direction.DESC) Pageable pageable) {
		return ResponseEntity.status(HttpStatus.OK).body(controleSoftwareService.findAll(pageable));
	}

	@GetMapping("/{id}")
	public ResponseEntity<Object> getIdControleSoftware(@PathVariable(value = "id") Long id) {
		Optional<ControleSoftwareEntity> controleSoftwareEntityOptional = controleSoftwareService.findById(id);
		if (!controleSoftwareEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: O ID solicitado não foi encontrado!");
		}
		return ResponseEntity.status(HttpStatus.OK).body(controleSoftwareEntityOptional.get());
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Object> deleteControleSoftware(@PathVariable(value = "id") Long id) {
		Optional<ControleSoftwareEntity> controleSoftwareEntityOptional = controleSoftwareService.findById(id);
		if (!controleSoftwareEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: O ID solicitado não foi encontrado!");
		}
		controleSoftwareService.delete(controleSoftwareEntityOptional.get());
		return ResponseEntity.status(HttpStatus.OK).body("SUCESSO: Deletado com Sucesso!");
	}

	@PutMapping("/{id}")
	public ResponseEntity<Object> updateControleSoftware(@PathVariable(value = "id") Long id,
			@RequestBody @Valid ControleSoftwareVO controleSoftwareVO) {
		Optional<ControleSoftwareEntity> controleSoftwareEntityOptional = controleSoftwareService.findById(id);
		if (!controleSoftwareEntityOptional.isPresent()) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("ERRO: O ID solicitado não foi encontrado!");
		}
		ControleSoftwareEntity controleSoftwareEntity = controleSoftwareEntityOptional.get();
		controleSoftwareEntity.setCpfCliente(controleSoftwareVO.getCpfCliente());
		controleSoftwareEntity.setNomeCliente(controleSoftwareVO.getNomeCliente());
		controleSoftwareEntity.setTelefoneCliente(controleSoftwareVO.getTelefoneCliente());
		controleSoftwareEntity.setSoftwareDesejado(controleSoftwareVO.getSoftwareDesejado());
		controleSoftwareEntity.setValorSoftware(controleSoftwareVO.getValorSoftware());
		controleSoftwareEntity.setDesenvolvedor(controleSoftwareVO.getDesenvolvedor());
		controleSoftwareEntity.setDataEntrega(controleSoftwareVO.getDataEntrega());

		return ResponseEntity.status(HttpStatus.OK).body(controleSoftwareService.salvar(controleSoftwareEntity));
	}

}
