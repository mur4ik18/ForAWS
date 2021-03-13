# -*- coding: utf-8 -*-
import json
import requests
from django.shortcuts import render
from galleries.models import Article
from mofa.models import BackgroundTiming
from django.http import JsonResponse
from datetime import datetime
import sendgrid

def home(request, path):
    template_name = 'home.html'
    if path:
        template_name = '{}.html'.format(path)
    return render(request, template_name)


def app(request, path=None):
    return render(request, 'app.html')

def mobile(request):
	return render(request, 'mobile-home.html')

def about(request):
	return render(request, 'mobile-about.html')

def testing(request):
	if request.method == 'GET':
		return render(request, 'testing.html')

def monews(request):
	if request.method == 'GET':
		return render(request, 'mobile-mo_news.html')
	elif request.method == 'POST':
		#Put post logic here
		# list id 1ce81f4739
		try: 
			email = request.POST['email']
			fullName = request.POST['full_name'].split()
			firstName = fullName[0]
			lastName = fullName[1]
		except e:
			print (e)
			return render(request, 'mobile-mo_news.html')

		# {
		#     "email_address": "urist.mcvankab@freddiesjokes.com",
		#     "status": "subscribed",
		#     "merge_fields": {
		#         "FNAME": "Urist",
		#         "LNAME": "McVankab"
		#     }
		# }

		formed = {
			'email_address': email,
			'status': 'subscribed',
			'merge_fields': {
				'FNAME': firstName,
				'LNAME': lastName
			}
		}
#		print (formed)
		parsed = json.dumps(formed)
#		print (parsed)
		req = requests.post('http://us9.api.mailchimp.com/3.0/lists/9e67587f52/members/', parsed, auth='1cedcc76355d6f506b05b988ce9e493a-us9')
		return render(request, 'mobile-mo_news.html')
	else:
		#Not something nice
		return render(request, 'mobile-mo_news.html')

def subcontent(request):
	if request.method == 'GET':
		return render(request, 'mobile-submit_content.html')
	elif request.method == 'POST':
		#Put post logic here
		try:
			email = request.POST['email']
			name = request.POST['name']
			web = request.POST['web']
			text = request.POST['text']
		except:
			return render(request, 'mobile-submit_content.html')
		try:
			#client = sendgrid.SendGridClient("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")
			#message = sendgrid.Mail()

			message.add_to("eugenia@mofamofamofa.com")
			message.set_from(email)
			message.set_subject("submissions")
			message.set_html(web + "<br><br>" + text)

#			print (email + web + text)
			#client.send(message)
			send_mail(message)
			return render(request, 'mobile-thankyou.html')
		except e:
			print(e)
			return render(request, 'mobile-submit_content.html')
	else:
		#Not something nice
		return render(request, 'mobile-submit_content.html')

def checkout(request):
	if request.method == 'GET':
		return render(request, 'mobile-checkout.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-checkout.html')
	else:
		#Not something nice
		return render(request, 'mobile-checkout.html')

def thankyou(request):
	if request.method == 'GET':
		return render(request, 'mobile-checkout-thankyou.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-checkout-thankyou.html')
	else:
		#Not something nice
		return render(request, 'mobile-checkout-thankyou.html')

def emarket(request):
	if request.method == 'GET':
		return render(request, 'mobile-emarket.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-emarket.html')
	else:
		#Not something nice
		return render(request, 'mobile-emarket.html')

def emarketMostrecent(request):
	if request.method == 'GET':
		return render(request, 'mobile-emarket-mostrecent.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-emarket-mostrecent.html')
	else:
		#Not something nice
		return render(request, 'mobile-emarket-mostrecent.html')

def emarketIndividual(request):
	if request.method == 'GET':
		return render(request, 'mobile-emarket-individual.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-emarket-individual.html')
	else:
		#Not something nice
		return render(request, 'mobile-emarket-individual.html')

def gallery(request):
	if request.method == 'GET':
		return render(request, 'mobile-gallery.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-gallery.html')
	else:
		#Not something nice
		return render(request, 'mobile-gallery.html')

def galleryMostrecent(request):
	if request.method == 'GET':
		return render(request, 'mobile-gallery-mostrecent.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-gallery-mostrecent.html')
	else:
		#Not something nice
		return render(request, 'mobile-gallery-mostrecent.html')

def galleryIndividual(request):
	if request.method == 'GET':
		return render(request, 'mobile-individual.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-individual.html')
	else:
		#Not something nice
		return render(request, 'mobile-individual.html')

def garden(request):
	if request.method == 'GET':
		return render(request, 'mobile-garden.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-garden.html')
	else:
		#Not something nice
		return render(request, 'mobile-garden.html')

def gardenMostrecent(request):
	if request.method == 'GET':
		return render(request, 'mobile-garden-mostrecent.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-garden-mostrecent.html')
	else:
		#Not something nice
		return render(request, 'mobile-garden-mostrecent.html')

def gardenIndividual(request):
	if request.method == 'GET':
		return render(request, 'mobile-garden-individual.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-garden-individual.html')
	else:
		#Not something nice
		return render(request, 'mobile-garden-individual.html')

def preview(request):
	if request.method == 'GET':
		return render(request, 'mobile-checkout-preview.html')
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-checkout-preview.html')
	else:
		#Not something nice
		return render(request, 'mobile-checkout-preview.html')

def getBg(request):
	if request.method == 'GET':
		set = BackgroundTiming.objects.all()
		now = datetime.now().time()
		currentBg = None
		for d in set:
			if currentBg == None:			
				currentBg = d
			else:
				if d.time_of_day < now and d.time_of_day > currentBg.time_of_day:
					currentBg = d
		resper = {}
		try:
			resper['image'] = str(currentBg.background_image)
		except:
			return HttpResponseNotFound()
			
		return JsonResponse(resper)
	elif request.method == 'POST':
		#Put post logic here
		return render(request, 'mobile-checkout-preview.html')
	else:
		#Not something nice
		return render(request, 'mobile-checkout-preview.html')
