# Generated by Django 2.2 on 2021-12-17 18:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='tweets',
            name='stack',
        ),
    ]
