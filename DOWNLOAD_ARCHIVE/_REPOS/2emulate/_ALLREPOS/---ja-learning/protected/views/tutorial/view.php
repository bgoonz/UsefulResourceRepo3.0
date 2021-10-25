<?php
$this->breadcrumbs=array(
	'Tutorials'=>array('index'),
	$model->name,
);

$this->menu=array(
	array('label'=>'List Tutorial', 'url'=>array('index')),
	array('label'=>'Create Tutorial', 'url'=>array('create')),
	array('label'=>'Update Tutorial', 'url'=>array('update', 'id'=>$model->id)),
	array('label'=>'Delete Tutorial', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->id),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Tutorial', 'url'=>array('admin')),
);
?>

<h1>View Tutorial #<?php echo $model->id; ?></h1>

<?php 
$this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'id',
		'user_id',
		'name',
		'link',
		'accessed',
		'created_at',
	),
)); 
?>
<br/>
<h1>Chapters:</h1>
<?php $this->widget('zii.widgets.CListView',array(
	'dataProvider' => $chapterDataProvider,
	'itemView' => '/chapter/_view2',
)); ?>
