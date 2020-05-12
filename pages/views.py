from django.shortcuts import render
from django.views.generic import TemplateView


def index(request):
    return render(request, 'pages/home.html')


def about(request):
    return render(request, 'pages/about.html')




