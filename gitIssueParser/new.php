<?php
require_once(__DIR__ . '/github-php-client/client/GitHubClient.php');

$owner = 'symfony';
$repo = 'symfony';

$client = new GitHubClient();

$client->setPage();
$client->setPageSize(3);
$issues = $client->issues->listIssues($owner, $repo);

//print_r($client);

foreach ($issues as $issue)
{
    // $issue data
    $comments = $client->issues->comments->listCommentsOnAnIssue($owner, $repo, $issue->getNumber());
    foreach ($comments as $comment)
    {
        // $comment data
    }
}