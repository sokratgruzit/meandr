<section id="form_section">
    <div class="form_wrapper">
        <label for="contact_form">Теперь расскажите о себе</label>
        <form id="contact_form" action="{{ route('submit-contact-form') }}" method="GET"> 
            @csrf
            @foreach ($form_inputs as $item)
                <div class="input_wrapper item">
                    <div class="number_icon">{{ $item['number'] }}</div>
                    <div class="animated_placeholder">{{ $item['placeholder'] }}</div>
                    <input id="input_{{ $item['number'] }}" class="form_input" data-value="{{ $item['placeholder'] }}" name="{{ $item['name'] }}">
                </div>
            @endforeach
            <button type="submit" class="contact_form_submit_btn item">Отправить</button>
        </form>
    </div>
</section>