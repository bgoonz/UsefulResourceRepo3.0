<?php

/**
 * This is the model class for table "tbl_chapters".
 *
 * The followings are the available columns in table 'tbl_chapters':
 * @property integer $id
 * @property integer $tutorial_id
 * @property string $name
 * @property string $link
 * @property string $accessed
 * @property string $created_at
 *
 * The followings are the available model relations:
 * @property Tutorials $tutorial
 */
class Chapter extends CActiveRecord
{

	private $_projectName = null;
	
	/**
	 * Returns the static model of the specified AR class.
	 * @return Chapter the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return 'tbl_chapters';
	}
	
	public function getProjectName()
	{
		return $this->tutorial->name;
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('tutorial_id, name, link', 'required'),
			array('tutorial_id', 'numerical', 'integerOnly'=>true),
			array('name, link', 'length', 'max'=>255),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, tutorial_id, name, link, accessed, created_at', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
			'tutorial' => array(self::BELONGS_TO, 'Tutorial', 'tutorial_id'),
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'tutorial_id' => 'Tutorial',
			'name' => 'Name',
			'link' => 'Link',
			'accessed' => 'Accessed',
			'created_at' => 'Created At',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('tutorial_id',$this->tutorial_id);
		$criteria->compare('name',$this->name,true);
		$criteria->compare('link',$this->link,true);
		$criteria->compare('accessed',$this->accessed,true);
		$criteria->compare('created_at',$this->created_at,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}