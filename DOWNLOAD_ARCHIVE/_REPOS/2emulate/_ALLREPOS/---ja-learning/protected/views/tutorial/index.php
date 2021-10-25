<?php
$this->breadcrumbs=array(
	'Tutorials',
);

$this->menu=array(
	array('label'=>'Create Tutorial', 'url'=>array('create')),
	array('label'=>'Manage Tutorial', 'url'=>array('admin')),
);
?>

<h1>Tutorials</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
