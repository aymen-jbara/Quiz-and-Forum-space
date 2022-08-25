package com.esprit.pidevbackend.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity

public class Publication implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Enumerated(EnumType.STRING)
    private TypePub typePub;
    private String Statut;
    private boolean IsBlocked;
    private int nbrComment;
    private int nbrLike;
    @ManyToOne
    private User user;
    @OneToMany(mappedBy = "publication",cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<CommentPub> commentPub;
    @ManyToMany
    @JsonIgnore
    private Set<LikePub> likePubs;


    public int getNbrComment() {
        return nbrComment;
    }

    public void setNbrComment(int nbrComment) {
        this.nbrComment = nbrComment;
    }

    public int getNbrLike() {
        return nbrLike;
    }

    public void setNbrLike(int nbrLike) {
        this.nbrLike = nbrLike;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public TypePub getTypePub() {
        return typePub;
    }

    public void setTypePub(TypePub typePub) {
        this.typePub = typePub;
    }

    public String getStatut() {
        return Statut;
    }

    public void setStatut(String statut) {
        Statut = statut;
    }

    public boolean isBlocked() {
        return IsBlocked;
    }

    public void setBlocked(boolean blocked) {
        IsBlocked = blocked;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Set<CommentPub> getCommentPub() {
        return commentPub;
    }

    public void setCommentPub(Set<CommentPub> commentPub) {
        this.commentPub = commentPub;
    }

    public Set<LikePub> getLikePubs() {
        return likePubs;
    }

    public void setLikePubs(Set<LikePub> likePubs) {
        this.likePubs = likePubs;
    }
}
