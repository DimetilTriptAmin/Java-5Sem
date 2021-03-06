package by.karelin.domain.models;

import by.karelin.domain.utils.enums.UserRole;

import javax.persistence.*;

@Entity
@Table(name = "FA_FILM")
public class Film {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    @Lob
    private String poster;
    private String producer;
    private String description;
    private String trailerLink;
    private double rating;

    public Film(){}

    //region getters&setters

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getPoster() {
        return poster;
    }

    public void setPoster(String poster) {
        this.poster = poster;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrailerLink() {
        return trailerLink;
    }

    public void setTrailerLink(String trailerLink) {
        this.trailerLink = trailerLink;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getProducer() {
        return producer;
    }

    public void setProducer(String producer) {
        this.producer = producer;
    }

    //endregion
}
