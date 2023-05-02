package com.portfolio.ProyectoFinal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Usuario {
    
    @Id
    @GeneratedValue( strategy = GenerationType.AUTO)
    private int id;
    private String nombreUsuario;
    private String password;
    
    public Usuario (){
        
    }
    
    public Usuario (int id , String nombreUsuario , String password) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
