# Generated by Django 2.2 on 2021-12-17 19:17

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0002_remove_tweets_stack'),
    ]

    operations = [
        migrations.AddField(
            model_name='tweets',
            name='stack',
            field=multiselectfield.db.fields.MultiSelectField(blank=True, choices=[('react', 'REACT'), ('django', 'DJANGO'), ('Node.js', 'NODE.JS'), ('Asp.net', 'ASP.NET'), ('Php', 'PHP')], max_length=32, null=True),
        ),
    ]
