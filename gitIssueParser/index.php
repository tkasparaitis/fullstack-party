<?php

$conf = array('db' => 'testio',
        'host' => '127.0.0.1',
        'user' => 'root',
        'password' => 'toka2702');

$sql = mysqli_connect($conf['host'], $conf['user'], $conf['password'], $conf['db']);
$sql->set_charset("utf8");

function getIssues($url, $conn){
    $data = file_get_contents($url);
    $issues = explode('<li id="issue_', $data);

    for($i=1;$i<count($issues);$i++){
        $issue = getIssue('https://github.com/symfony/symfony/issues/'.explode('"', $issues[$i])[0]);
        $comments = getComments('https://github.com/symfony/symfony/issues/'.explode('"', $issues[$i])[0]);
        die;
        $query = "insert into issues (id, title, status, author, labels, timestamp) VALUES
(".$issue['id'].", '".$issue['title']."', ".$issue['status'].", '".$issue['author']."', '".$issue['labels']."', '".$issue['time']."')";
	//echo $query;
        //$conn->query($query);
    }

    //print_r($issues[1]);
    return $url;
}

function getIssue($url){
    $data = file_get_contents($url);
    $title = '<span class="js-issue-title">';
    $author = '<a class="author"';
    $labels = '<div class="labels css-truncate">';
    $time = '<relative-time datetime="';

    $record = [];

    $record['id'] = explode('issues/', $url)[1];
    $record['title'] = trim(explode('</span>', explode($title, $data)[1])[0]);
    $record['author'] = explode('</a>', explode('">', explode($author, $data)[1])[1])[0];
    $record['time'] = str_replace('T', ' ', explode('Z">', explode($time, $data)[1])[0]);
    $record['labels'] = implode('|',getLabels($data, $labels));
    $record['status'] = 1;

    return $record;
}

function getComments($url){
    $data = file_get_contents($url);
    $recordsplit = 'class="js-timeline-item';
    $comments = explode($recordsplit, $data);
    echo count($comments);
}

function getLabels($text, $del){

   $labels = explode('<span class="css-truncate-target" style="max-width: 100%">', str_replace('</span></a>','', trim(explode('</div>', explode($del, $text)[1])[0])));
   if($labels[0] != 'None yet'){
	for($i=1;$i<count($labels)-1;$i++){
	    $labels[$i] = trim(explode('<a', $labels[$i])[0]);
	}
	array_shift($labels);
   }
   return $labels;
}


function getLastPage($url){
    $data = file_get_contents($url);
    $start = '<div class="pagination">';
    $end = '</div>';
    $pages = explode('href="', explode($end, explode($start, $data)[1])[0]);
    $result = explode('</a>', explode('">', $pages[count($pages)-2])[1])[0];
    return $result;
}

$url = 'https://github.com/symfony/symfony/issues?q=is%3Aissue+is%3Aopen&page=';

$lastastPage = getLastPage($url);

for($i=1;$i<=$lastastPage;$i++){
    getIssues($url.$i, $sql);
}

//echo $lastastPage;

//$issues = getIssues($url.'1', $sql);
//print_r($issues);
?>
