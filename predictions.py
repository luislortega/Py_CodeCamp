import requests
from requests import get
from requests.exceptions import RequestException
import bs4
from bs4 import BeautifulSoup
import pandas as pd
import time
import urllib
from urllib.request import urlopen

max_results_per_city = 2000

city_set = ['United+States']

columns = ['city', 'job_title', 'company_name', 'location', 'summary', 'salary']

jobtype = ['data+scientist','software+engineer','software+intern','electrical+engineer','civil+engineer']

sample_df = pd.DataFrame(columns = columns)


for city in city_set:
    for jobname in jobtype:
        for start in range(0, max_results_per_city, 10):
            page = requests.get('http://www.indeed.com/jobs?q='+str(jobname)+'&l=' + str(city) + '&start=' + str(start))
            time.sleep(1)
            soup = BeautifulSoup(page.text, 'lxml')
            for div in soup.find_all(name='div', attrs={'class':'row'}):
                num = (len(sample_df) + 1)
                job_post = []
                job_post.append(city)
                for a in div.find_all(name='a', attrs={'data-tn-element':'jobTitle'}):
                    job_post.append(a['title'])
                company = div.find_all(name='span', attrs={'class':'company'})
                if len(company) > 0:
                    for b in company:
                        job_post.append(b.text.strip())
                else:
                    sec_try = div.find_all(name='span', attrs={'class':'result-link-source'})
                    for span in sec_try:
                        job_post.append(span.text)
                c = div.findAll('span', attrs={'class': 'location'})
                for span in c:
                    job_post.append(span.text)
                d = div.findAll('span', attrs={'class': 'summary'})
                for span in d:
                    job_post.append(span.text.strip())
                try:
                    job_post.append(div.find('nobr').text)
                except:
                    try:
                        div_two = div.find(name='div', attrs={'class':'sjcl'})
                        div_three = div_two.find('div')
                        job_post.append(div_three.text.strip())
                    except:
                        job_post.append('Nothing_found')
                sample_df.loc[num] = job_post

print(sample_df)
sample_df.to_csv('jobs.csv', encoding='utf-8')
                