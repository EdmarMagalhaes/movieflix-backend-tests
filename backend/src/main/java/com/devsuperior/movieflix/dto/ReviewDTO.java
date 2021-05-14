package com.devsuperior.movieflix.dto;

import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.User;

public class ReviewDTO {
	
	private Long id;
	private String text;
	
	private User user;
	private Movie movie;
	
	public ReviewDTO() {
	}

	public ReviewDTO(Long id, String text) {
		this.id = id;
		this.text = text;
	}
	
	public ReviewDTO(Review entity) {
		id = entity.getId();
		text = entity.getText();
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	
	
}
