package by.karelin.webapi.controllers;

import by.karelin.business.dto.Responses.ServiceResponse;
import by.karelin.business.exceptions.ServiceException;
import by.karelin.business.services.interfaces.IFilmService;
import by.karelin.domain.models.Film;
import javassist.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping(value = "api/Film")
public class FilmController {
    private final IFilmService filmService;

    public FilmController (IFilmService filmService){
        this.filmService = filmService;
    }

    @GetMapping(value = "/all")
    public @ResponseBody ResponseEntity getFilms()
    {
        return new ResponseEntity<List<Film>>(filmService.FindAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public @ResponseBody ResponseEntity getFilm(@PathVariable Long id)
            throws ServiceException, NotFoundException
    {
        ServiceResponse<Film> response = filmService.GetById(id);

        if (!response.IsSucceeded()) {
            return new ResponseEntity<String>(response.getErrorMessage(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Film>(response.getValue(), HttpStatus.OK);
    }

    @GetMapping(value = "id/{title}")
    public @ResponseBody ResponseEntity getFilmId(@PathVariable String title)
            throws ServiceException, NotFoundException
    {
        ServiceResponse<Long> response = filmService.GetIdByTitle(title);

        if (!response.IsSucceeded()) {
            return new ResponseEntity<String>(response.getErrorMessage(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Long>(response.getValue(), HttpStatus.OK);
    }
}
