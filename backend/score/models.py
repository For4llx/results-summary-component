from django.db import models


class Score(models.Model):
    category = models.CharField(max_length=50)
    score = models.IntegerField()
    icon = models.CharField(max_length=500)

    def __str__(self):
        return self.category
