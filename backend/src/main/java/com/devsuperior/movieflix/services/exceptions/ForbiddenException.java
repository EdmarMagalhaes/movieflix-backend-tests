package com.devsuperior.movieflix.services.exceptions;

public class ForbiddenException extends RuntimeException{ // 403 -logado mas sem autorização para acessar o recurso
	private static final long serialVersionUID = 1L;
	
	public ForbiddenException(String msg) {
		super(msg);
	}

}
