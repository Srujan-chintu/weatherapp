# Generated by Django 2.2.6 on 2020-01-21 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherapp', '0003_auto_20200121_1210'),
    ]

    operations = [
        migrations.AlterField(
            model_name='weatherdetails',
            name='today_date',
            field=models.TimeField(),
        ),
    ]
