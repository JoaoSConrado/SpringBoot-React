package br.com.api.controlesoftware.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.api.controlesoftware.entity.ControleSoftwareEntity;

@Repository
public interface ControleSoftwareRepository extends JpaRepository<ControleSoftwareEntity, Long> {

	boolean existsByCpfCliente(String cpfCliente);

}
