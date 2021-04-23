<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Support\ResponseHelper;
use Illuminate\Http\Request;
use App\Scraper\TGDD;

class ScrapeController extends Controller
{
    /**
     * Define global variable
     *
     * @var $theGioiDiDong
     */
    protected $theGioiDiDong;

    /**
     * PaygateController constructor.
     */
    public function __construct()
    {
        $this->theGioiDiDong = new TGDD();
    }

    /**
     * Controller function crawl data from tgdd
     *
     * @param Request $request
     * @return |null
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function scrapeTheGioiDiDong(Request $request)
    {
        $data = $this->theGioiDiDong->scrape();
        return app()->make(ResponseHelper::class)->success($data);
    }
}
