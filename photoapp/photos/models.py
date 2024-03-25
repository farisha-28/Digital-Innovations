from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Category(models.Model):
    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    

    def __str__(self):
        return self.name


class Photo(models.Model):
    class Meta:
        verbose_name = 'Photo'
        verbose_name_plural = 'Photos'
    
    #category model is the foreign key because the product will have the category information
    # on_delete null means the product iamge will not be deleted if the category is deleted
    # product will be deleted only if the image is deleted.
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    
    # the form shuld not be null and blank=False allows user nothing to submit whitout image
    image = models.ImageField(null=False, blank=False)
    description = models.TextField()
    photo_title = models.CharField(max_length=200,null=True, blank=False)
    brand_name = models.CharField(max_length=200,null=True, blank=False)
    

    def __str__(self):
        return self.description

class Image(models.Model):
    username = models.CharField(max_length=30)
    image = models.ImageField(upload_to='images')
