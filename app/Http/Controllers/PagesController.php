<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Session;

class PagesController extends Controller
{
    public function index() {
        $promo_content = array(
            '0' => array(
                'header' => 'Прокачиваем мир',
                'content' => 'Вы хотите сделать мир лучше и не готовы ждать всю жизнь, чтобы начать это делать?'
            ),
            '1' => array(
                'header' => 'Мотивируем себя',
                'content' => 'У вас есть собственная цель и вы не боитесь много работать, чтобы её достичь?'
            ),
            '2' => array(
                'header' => 'Используем лучшее',
                'content' => 'Вы способны применять разные подходы для достижения своих целей?'
            ),
            '3' => array(
                'header' => 'Относимся с пониманием',
                'content' => 'Вы не обвиняете других в свои неудачах и способны воспринимать критику?'
            )
        );

        $adv_content = array(
            '0' => array(
                'header' => 'Делимся оптом и навыками',
                'content' => 'Мы обучаем коллег всему, что знаем сами. Наш опыт уникален и проверен временем, а команда постоянно совершенствует свои знания и навыки.',
                'img_url' => '/img/wallet.svg'
            ),
            '1' => array(
                'header' => 'Стабильная зарплата',
                'content' => 'Вы без задержек получаете официальную зарплату. Также мы оплачиваем больничные и даем возможность брать оплачиваемый отпуск до 4 недель в год.',
                'img_url' => '/img/wallet.svg'
            ),
            '2' => array(
                'header' => 'Гибкий график',
                'content' => 'Мы умеем работать с теми, кто еще не закончил получать образование. Вы можете работать неполный рабочий день, брать отгулы на время сессии и диплома.',
                'img_url' => '/img/wallet.svg'
            )
        );

        $form_inputs = array(
            '0' => array(
                'number' => '1',
                'placeholder' => 'Фамилия и имя',
                'name' => 'client_name'
            ),
            '1' => array(
                'number' => '2',
                'placeholder' => 'Электронная почта',
                'name' => 'client_email'
            ),
            '2' => array(
                'number' => '3',
                'placeholder' => 'Телефон',
                'name' => 'client_phone'
            ),
            '3' => array(
                'number' => '4',
                'placeholder' => 'Какой деятельностью, не связанной с текущими проектами, вы бы хотели заниматься в рабочее время?',
                'name' => 'client_performance'
            )
        );

        return view('home')->with([
            'adv_content' => $adv_content, 
            'promo_content' => $promo_content,
            'form_inputs' => $form_inputs
        ]);
    }

    public function talents() {

        return view('talents');
    }

    public function supports() {

        return view('supports');
    }

    public function ajaxContactForm(Request $request) {

        return redirect()->back();
    }
}