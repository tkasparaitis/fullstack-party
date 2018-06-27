<?php
namespace App\Entity;
use Doctrine\ORM\Mapping as ORM;
/**
 * @ORM\Entity
 * @ORM\Table(name="issues")
 */
class Issue {
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    public $id;
    /**
     * @ORM\Column(type="string", length=255)
     */
    public $title;
    /**
     * @ORM\Column(type="integer")
     */
    public $status;
    /**
     * @ORM\Column(type="text")
     */
    public $author;
    /**
     * @ORM\Column(type="text")
     */
    public $labels;
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

    public function getTitle()
    {
        return $this->title;
    }
    public function setTitle($title)
    {
        $this->title = $title;
    }

    public function getStatus()
    {
        return $this->status;
    }
    public function setStatus($status)
    {
        $this->status = $status;
    }

    public function getAuthor()
    {
        return $this->author;
    }
    public function setAuthor($author)
    {
        $this->author = $author;
    }

    public function getLabels()
    {
        return $this->labels;
    }
    public function setLabels($labels)
    {
        $this->labels = $labels;
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