# Generated by Django 2.2 on 2021-04-17 08:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0005_auto_20210413_2143'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweets',
            name='parent',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tweets.Tweets'),
        ),
    ]