# Generated by Django 3.1.5 on 2021-01-31 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('EmployeeId', models.AutoField(primary_key=True, serialize=False)),
                ('EmployeeUsername', models.CharField(max_length=30)),
                ('EmployeeTask', models.CharField(max_length=30)),
                ('BugId', models.CharField(max_length=30)),
                ('TaskDate', models.DateField()),
            ],
        ),
    ]
