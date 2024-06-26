# Generated by Django 5.0.3 on 2024-05-14 00:11

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SNS', '0003_rename_text_post_content'),
    ]

    operations = [
        migrations.CreateModel(
            name='Like',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='SNS.post')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='SNS.user')),
            ],
            options={
                'unique_together': {('user', 'post')},
            },
        ),
    ]
