package com.esprit.pidevbackend.Domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.Email;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Set;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User implements Serializable {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    Long id ;
    String name ;
    String username ;
    String email;
    String password ;
    String picture ;
    String token;
    String phoneNumber ;
    Integer kudos ;
    @Enumerated(EnumType.STRING)
    private Departement departement;
    @Enumerated(EnumType.STRING)
    private Office office;
    @Enumerated(EnumType.STRING)
    private IneterestCenter ineterestCenter;
    @Column(columnDefinition = "TIMESTAMP")
    LocalDateTime tokenCreationDate;
    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    Collection<Role> roles = new ArrayList<>();







    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    @OneToOne(mappedBy="user")
    @JsonIgnore
    Achievements achievements ;
    @OneToMany(mappedBy="users", cascade=CascadeType.ALL)
    @JsonIgnore
    Set<Collaboration> collaborations;
    @ManyToMany(mappedBy = "users", cascade = CascadeType.ALL)
    @JsonIgnore
    Set<Event> events;
    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    List<Commentaire> commentaires;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    Set <Opinion> opinion;
    @JsonIgnore

    @ManyToMany(mappedBy = "users")
    Set<Answer>answers;
    @OneToMany(mappedBy ="user" )
    @JsonIgnore
    Set<Publication>publications;
    @OneToMany(mappedBy = "user")
    @JsonIgnore
    Set<CommentPub>commentPubs;
    @OneToOne(mappedBy = "users")
    @JsonIgnore
    LikePub likePubs;
    @OneToOne()
    @JsonIgnore
    private ConseilsUser conseilsUser;
    @ManyToOne
    @JsonIgnore
    Team team;
    @OneToOne
    RatingForum ratingForum;

    public RatingForum getRatingForum() {
        return ratingForum;
    }

    public void setRatingForum(RatingForum ratingForum) {
        this.ratingForum = ratingForum;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Integer getKudos() {
        return kudos;
    }

    public void setKudos(Integer kudos) {
        this.kudos = kudos;
    }

    public Departement getDepartement() {
        return departement;
    }

    public void setDepartement(Departement departement) {
        this.departement = departement;
    }

    public Office getOffice() {
        return office;
    }

    public void setOffice(Office office) {
        this.office = office;
    }

    public IneterestCenter getIneterestCenter() {
        return ineterestCenter;
    }

    public void setIneterestCenter(IneterestCenter ineterestCenter) {
        this.ineterestCenter = ineterestCenter;
    }

    public LocalDateTime getTokenCreationDate() {
        return tokenCreationDate;
    }

    public void setTokenCreationDate(LocalDateTime tokenCreationDate) {
        this.tokenCreationDate = tokenCreationDate;
    }

    public Collection<Role> getRoles() {
        return roles;
    }

    public void setRoles(Collection<Role> roles) {
        this.roles = roles;
    }

    public Achievements getAchievements() {
        return achievements;
    }

    public void setAchievements(Achievements achievements) {
        this.achievements = achievements;
    }

    public Set<Collaboration> getCollaborations() {
        return collaborations;
    }

    public void setCollaborations(Set<Collaboration> collaborations) {
        this.collaborations = collaborations;
    }

    public Set<Event> getEvents() {
        return events;
    }

    public void setEvents(Set<Event> events) {
        this.events = events;
    }

    public List<Commentaire> getCommentaires() {
        return commentaires;
    }

    public void setCommentaires(List<Commentaire> commentaires) {
        this.commentaires = commentaires;
    }

    public Set<Opinion> getOpinion() {
        return opinion;
    }

    public void setOpinion(Set<Opinion> opinion) {
        this.opinion = opinion;
    }

    public Set<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(Set<Answer> answers) {
        this.answers = answers;
    }

    public Set<Publication> getPublications() {
        return publications;
    }

    public void setPublications(Set<Publication> publications) {
        this.publications = publications;
    }

    public Set<CommentPub> getCommentPubs() {
        return commentPubs;
    }

    public void setCommentPubs(Set<CommentPub> commentPubs) {
        this.commentPubs = commentPubs;
    }

    public LikePub getLikePubs() {
        return likePubs;
    }

    public void setLikePubs(LikePub likePubs) {
        this.likePubs = likePubs;
    }

    public ConseilsUser getConseilsUser() {
        return conseilsUser;
    }

    public void setConseilsUser(ConseilsUser conseilsUser) {
        this.conseilsUser = conseilsUser;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}
