package com.devsuperior.movieflix.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.ReviewDTO;
import com.devsuperior.movieflix.entities.Movie;
import com.devsuperior.movieflix.entities.Review;
import com.devsuperior.movieflix.entities.Role;
import com.devsuperior.movieflix.entities.User;
import com.devsuperior.movieflix.repositories.MovieRepository;
import com.devsuperior.movieflix.repositories.ReviewRepository;
import com.devsuperior.movieflix.services.exceptions.ForbiddenException;

@Service
public class ReviewService {

	@Autowired
	private ReviewRepository repository;
	
	@Autowired
	private MovieRepository movieRepository;
	
	@Autowired
	private UserService userService;
	
	@Transactional
	public ReviewDTO insert(ReviewDTO dto) {
		Movie movie = movieRepository.getOne(dto.getMovieId());
		User user = userService.authenticated();
		for (Role role : user.getRoles()) {
			if (role.getAuthority().equals("ROLE_VISITOR")) {
				throw new ForbiddenException("Access denied");
			}
		}
		Review review = new Review(null, dto.getText(), movie, user);
		review = repository.save(review);
		return new ReviewDTO(review);
	}

}
