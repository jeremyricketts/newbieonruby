<?php 
$output = shell_exec('git pull');
echo "<pre>$output</pre>";
$output2 = shell_exec('jekyll');
echo "<pre>$output2</pre>";
?>