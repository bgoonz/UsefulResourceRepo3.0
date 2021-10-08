# Generated by Django 2.1.4 on 2018-12-07 16:10

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [("notes", "0001_initial")]

    operations = [
        migrations.AddField(
            model_name="note",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="note",
            name="last_modified",
            field=models.DateTimeField(auto_now=True),
        ),
    ]
