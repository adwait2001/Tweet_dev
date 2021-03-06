# Generated by Django 2.2 on 2021-12-17 13:51

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import multiselectfield.db.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='TweetLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Tweets',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(blank=True, null=True)),
                ('image', models.FileField(blank=True, null=True, upload_to='images/')),
                ('timestamp', models.DateTimeField(auto_now_add=True)),
                ('stack', multiselectfield.db.fields.MultiSelectField(choices=[('react', 'REACT'), ('django', 'DJANGO'), ('Node.js', 'NODE.JS'), ('Asp.net', 'ASP.NET'), ('Php', 'PHP')], max_length=32)),
                ('likes', models.ManyToManyField(related_name='tweet_user', through='tweets.TweetLike', to=settings.AUTH_USER_MODEL)),
                ('parent', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tweets.Tweets')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tweets', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.AddField(
            model_name='tweetlike',
            name='tweet',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='tweets.Tweets'),
        ),
        migrations.AddField(
            model_name='tweetlike',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
