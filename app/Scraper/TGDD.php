<?php

namespace App\Scraper;

use Goutte\Client;
use Symfony\Component\DomCrawler\Crawler;

class TGDD
{
    /**
     * @var string
     */
    private $targetUrl= "https://www.thegioididong.com/dtdd";
    private $arrDataResponse = [];

    /**
     * Function crawl data from target url
     *
     * @return array
     */
    public function scrape()
    {
        $client = new Client();
        $crawler = $client->request('GET', $this->targetUrl);

        /**
         * Analyze the data returned from the target website
         */
        $crawler->filter('ul.homeproduct li.item')->each(
            function (Crawler $node) {
                $name = $node->filter('h3')->text();
                $price = $node->filter('.price strong')->text();
                $wholeStar = $node->filter('.icontgdd-ystar')->count();
                $halfStar = $node->filter('.icontgdd-hstar')->count();
                $rate = $wholeStar + 0.5 * $halfStar;
                // add to array
                $response['name'] = $name;
                $response['price'] =  preg_replace('/\D/', '', $price); // replace price
                $response['wholeStar'] = $wholeStar;
                $response['halfStar'] = $halfStar;
                $response['rate'] = $rate;
                array_push($this->arrDataResponse, $response);
            }
        );

        return $this->arrDataResponse;
    }
}
