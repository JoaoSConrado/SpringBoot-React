package br.com.api.controlesoftware.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.api.controlesoftware.entity.ControleSoftwareEntity;
import br.com.api.controlesoftware.repository.ControleSoftwareRepository;

@Service
public class ControleSoftwareService {

	@Autowired
	ControleSoftwareRepository controleSoftwareRepository;

	@Transactional
	public ControleSoftwareEntity salvar(ControleSoftwareEntity controleSoftwareEntity) {
		return controleSoftwareRepository.save(controleSoftwareEntity);
	}

	public boolean existsByCpfCliente(String cpfCliente) {
		return controleSoftwareRepository.existsByCpfCliente(cpfCliente);
	}

	public Page<ControleSoftwareEntity> findAll(Pageable pageable) {
		return controleSoftwareRepository.findAll(pageable);
	}

	public Optional<ControleSoftwareEntity> findById(Long id) {
		return controleSoftwareRepository.findById(id);
	}

	@Transactional
	public void delete(ControleSoftwareEntity controleSoftwareEntity) {
		controleSoftwareRepository.delete(controleSoftwareEntity);
	}

}
