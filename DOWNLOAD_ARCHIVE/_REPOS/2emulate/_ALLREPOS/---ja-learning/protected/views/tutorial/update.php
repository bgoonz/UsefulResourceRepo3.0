<?php
$this->breadcrumbs=array(
	'Tutorials'=>array('index'),
	$model->name=>array('view','id'=>$model->id),
	'Update',
);

$this->menu=array(
	array('label'=>'List Tutorial', 'url'=>array('index')),
	array('label'=>'Create Tutorial', 'url'=>array('create')),
	array('label'=>'View Tutorial', 'url'=>array('view', 'id'=>$model->id)),
	array('label'=>'Manage Tutorial', 'url'=>array('admin')),
);
?>

<h1>Update Tutorial <?php echo $model->id; ?></h1>

<?php echo $this->renderPartial('_form', array('model'=>$model)); ?>