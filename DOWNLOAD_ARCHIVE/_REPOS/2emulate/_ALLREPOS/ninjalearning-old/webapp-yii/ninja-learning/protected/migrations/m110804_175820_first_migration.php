<?php

class m110804_175820_first_migration extends CDbMigration
{
	public function up()
	{
		$this->createTable('car',array(
		 'id'=>'int UNSIGNED NOT NULL AUTO_INCREMENT',
		 'owner'=>'string',
		 'age'=>'int',
		 'make'=>'CHAR(10)',
		 'model'=>'VARCHAR(64)',
		 'PRIMARY KEY (id)')
		);
	}

	public function down()
	{
		$this->dropTable('car');
	}

	/*
	// Use safeUp/safeDown to do migration with transaction
	public function safeUp()
	{
	}

	public function safeDown()
	{
	}
	*/
}