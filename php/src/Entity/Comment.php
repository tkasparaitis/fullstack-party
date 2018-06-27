<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity
 * @ORM\Table(name="comments")
 */
class Comment {
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;
    /**
     * @ORM\Column(type="integer")
     */
    public $issue;
    /**
     * @ORM\Column(type="integer")
     */
    public $parent;
    /**
     * @ORM\Column(type="text")
     */
    public $author;
    /**
     * @ORM\Column(type="string", length=255)
     */
    public $avatr;
    /**
     * @ORM\Column(type="string", length=255)
     */
    public $text;
    /**
     * @ORM\Column(type="text")
     */
    public $timestamp;

    //Getters and Setters

    public function getId()
    {
        return $this->id;
    }
    public function setId($id)
    {
        $this->id = $id;
    }

    public function getIssue()
    {
        return $this->issue;
    }
    public function setIssue($issue)
    {
        $this->issue = $issue;
    }

    public function getParent()
    {
        return $this->parent;
    }
    public function setParent($parent)
    {
        $this->parent = $parent;
    }

    public function getAuthor()
    {
        return $this->author;
    }
    public function setAuthor($author)
    {
        $this->author = $author;
    }

    public function getAvatrs()
    {
        return $this->avatr;
    }
    public function setAvatr($avatr)
    {
        $this->avatr = $avatr;
    }

    public function getTimestamp()
    {
        return $this->timestamp;
    }
    public function setTimestamp($timestamp)
    {
        $this->timestamp = $timestamp;
    }
}