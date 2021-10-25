<?php
$this->breadcrumbs=array(
	'Tutorials'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Tutorial', 'url'=>array('index')),
	array('label'=>'Manage Tutorial', 'url'=>array('admin')),
);
?>

<h1>Create Tutorial</h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>