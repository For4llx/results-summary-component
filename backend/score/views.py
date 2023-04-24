from rest_framework.viewsets import ModelViewSet
from .models import Score
from .serializers import ScoreSerializer


class ScoreViewset(ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer
