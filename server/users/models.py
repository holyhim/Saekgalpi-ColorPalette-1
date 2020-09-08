from django.db import models

# Create your models here.
# Database 관련 part


class User(models.Model):
    user_id = models.CharField(max_length=128, null=False)
    password = models.CharField(max_length=128, null=False)

    class Meta:
        db_table = "User"  # Table name set
