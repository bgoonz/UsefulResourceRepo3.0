<?php $this->pageTitle=Yii::app()->name; ?>

<h1>Welcome to <i><?php echo CHtml::encode(Yii::app()->name); ?></i></h1>

<ul>
<li><?php echo CHtml::link('Users',array('user/index')); ?></li>
<li><?php echo CHtml::link("Tutorials",array("tutorial/index")); ?></li>
</ul>

<div>
<!--
<h3>What is nL?</h3>
<p>
The nL is web-based system, which goal is to provide <br />
(i) a solution to unify the “look and feel” of the information available on the Internet, <br />
(ii) a consistent navigation regardless of its sources and<br />
(iii) a centralized repository to track users’ progress.<br />
</p>

<h3>What nL tries to solve?</h3>
<p>
<ul>
<li>Unified the learning content disperse across internet.</li>
<li>Present the educational content in a unified and consistent way.</li>
<li>Measure the learning progress and keep track of it.</li>
</ul>
</p>
</div>

<p>For more infomation see also the <a href="http://www.assembla.com/spaces/ninja-learning/wiki/">wiki</a></p>
-->


<!--
<p>You may change the content of this page by modifying the following two files:</p>
<ul>
	<li>View file: <tt><?php //echo __FILE__; ?></tt></li>
	<li>Layout file: <tt><?php //echo $this->getLayoutFile('main'); ?></tt></li>
</ul>


<p>For more details on how to further develop this application, please read
the <a href="http://www.yiiframework.com/doc/">documentation</a>.
Feel free to ask in the <a href="http://www.yiiframework.com/forum/">forum</a>,
should you have any questions.</p>
-->