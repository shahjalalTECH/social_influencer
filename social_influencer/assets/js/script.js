$(document).ready(function () {
    // Click to active remove
    // $(".all-social-influencer-main-parent .col-12:first-child .social-user-img").addClass("current");
    $(document).on("click", ".social-user-img", function () {
        $(".social-card-header .social-card-title h3").text($(this).attr("data-name"));
        $(".social-card-img img").attr("src", $(this).find("img").attr("src"));
        $(".social-card-title p").text($(this).attr("data-title"));
        $(".social-card-content p").text($(this).attr("data-content"));
        $(".youtube-count").text($(this).attr("data-yt-count"));
        $(".facebook-count").text($(this).attr("data-fb-count"));
        $(".twitter-count").text($(this).attr("data-twt-count"));
        $(".instagram-count").text($(this).attr("data-inst-count"));
        $(".small-device-card-parent").remove();
        $(".social-user-img").removeClass("current");
        $(this).addClass("current");
        $(this).append(`<div class="small-device-card-parent">
    <div class="small-social-card-header">
        <div>
            <div class="small-social-card-img">
                <img src="assets/images/testimonial (1).jpg" alt="">
            </div>
            <div class="small-social-card-title">
                <h3>Tom Hawck</h3>
                <p>IT Solution Company</p>
            </div>
        </div>
        <div class="small-social-card-social-icon">
            <ul>
                <li><a href=""><i class="fa-brands fa-youtube"></i><span
                            class="youtube-count">3.5</span>k</a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i><span
                            class="twitter-count">3.5</span>k</a></li>
                <li><a href=""><i
                            class="fa-brands fa-instagram"></i><span
                            class="instagram-count">3.5</span>k</a></li>
                <li><a href=""><i
                            class="fa-brands fa-facebook-f"></i><span
                            class="facebook-count">3.5</span>k</a></li>
            </ul>
        </div>
    </div>
    <div class="small-social-card-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            id modi, culpa assumenda ex ullam mollitia optio minima
            commodi! Illo quibusdam sed molestias repellendus obcaecati
            expedita enim vel veniam repudiandae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolor totam doloremque
            quaerat eos rerum. Totam beatae perspiciatis sapiente nemo
            porro.</p>
    </div>
</div>`);


        //Small device Content Update

        $(".small-social-card-title h3").text($(this).attr("data-name"));
        $(".small-device-card-parent .small-social-card-img img").attr("src", $(this).find("img").attr("src"));
        $(".small-social-card-title p").text($(this).attr("data-title"));
        $(".small-social-card-content p").text($(this).attr("data-content"));
        $(".youtube-count").text($(this).attr("data-yt-count"));
        $(".facebook-count").text($(this).attr("data-fb-count"));
        $(".twitter-count").text($(this).attr("data-twt-count"));
        $(".instagram-count").text($(this).attr("data-inst-count"));
    });

    // Scroll Window

    $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        var $first;
        var firstPos;

        $('.social-user-main-parent .social-user-img').each(function () {
            var $box = $(this).removeClass('current');
            $(".social-user-img").removeClass('current');
            var pos = $box.offset();

            if (pos.top > scrollTop && (!firstPos || pos.top < firstPos.top)) {
                $first = $box;
                firstPos = pos;
            }
        });

        if ($first) {
            $first.addClass("current");
            $(".new__social-user-img-see-more").css("display", 'flex');

            //Desktop Content Update

            $(".social-card-header .social-card-title h3").text($first.attr("data-name"));
            $(".social-card-img img").attr("src", $first.find("img").attr("src"));
            $(".social-card-title p").text($first.attr("data-title"));
            $(".social-card-content p").text($first.attr("data-content"));
            $(".youtube-count").text($first.attr("data-yt-count"));
            $(".facebook-count").text($first.attr("data-fb-count"));
            $(".twitter-count").text($first.attr("data-twt-count"));
            $(".instagram-count").text($first.attr("data-inst-count"));

            // Small device Div append

            $(".small-device-card-parent").remove();
            $first.append(`<div class="small-device-card-parent">
            <div class="small-social-card-header">
            <div>
            <div class="small-social-card-img">
                <img src="assets/images/testimonial (1).jpg" alt="">
            </div>
            <div class="small-social-card-title">
                <h3>Tom Hawck</h3>
                <p>IT Solution Company</p>
            </div>
            </div>
            <div class="small-social-card-social-icon">
            <ul>
                <li><a href=""><i class="fa-brands fa-youtube"></i><span
                            class="youtube-count">3.5</span>k</a></li>
                <li><a href=""><i class="fa-brands fa-twitter"></i><span
                            class="twitter-count">3.5</span>k</a></li>
                <li><a href=""><i
                            class="fa-brands fa-instagram"></i><span
                            class="instagram-count">3.5</span>k</a></li>
                <li><a href=""><i
                            class="fa-brands fa-facebook-f"></i><span
                            class="facebook-count">3.5</span>k</a></li>
            </ul>
            </div>
        </div>
        <div class="small-social-card-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            id modi, culpa assumenda ex ullam mollitia optio minima
            commodi! Illo quibusdam sed molestias repellendus obcaecati
            expedita enim vel veniam repudiandae? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolor totam doloremque
            quaerat eos rerum. Totam beatae perspiciatis sapiente nemo
            porro.</p>
        </div>
        </div>`);

            //Small device Content Update

            $(".small-social-card-title h3").text($first.attr("data-name"));
            $(".small-device-card-parent .small-social-card-img img").attr("src", $first.find("img").attr("src"));
            $(".small-social-card-title p").text($first.attr("data-title"));
            $(".small-social-card-content p").text($first.attr("data-content"));
            $(".youtube-count").text($first.attr("data-yt-count"));
            $(".facebook-count").text($first.attr("data-fb-count"));
            $(".twitter-count").text($first.attr("data-twt-count"));
            $(".instagram-count").text($first.attr("data-inst-count"));
        }
    });

    // Show more

    $(".social-influencer-show-more-btn").on("click", function () {
        $(".all-social-influencer-main-parent").append(`<div class="dot-border"></div>
        <div class="col-12">
            <div class="row justify-content-end position-relative">
                <div class="col-xl-6 col-lg-5 col-md-4">
                    <div class="new__social-user-main-parent">
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div
                                    class="new__social-user-img new__social-user-img-see-more new__social__after social-user-img new__social-user-img-rotate">
                                    <h5>See more</h5>
                                    <div class="new__see-more-card-main-parent">
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="vis-hidden"><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img" data-name="Tom Hawck"
                                    data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img new__social-user-img-rotate"
                                    data-name="Tom Hawck" data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img" data-name="Tom Hawck"
                                    data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7 col-md-8">
                    <div class="social-user-main-parent social-user-main-parent-rotate">
                        <div class="social-user-parent social-user-parent-position">
                            <div class="social-user-img" data-name="Shah Jalal" data-title="Tek Company"
                                data-content="ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor"
                                data-fb-count="3.5" data-inst-count="3.5" data-twt-count="3.5"
                                data-yt-count="3.5">
                                <img src="assets/images/testimonial (2).jpg" alt="">
                            </div>
                            <div class="social-user-content">
                                <h2>4.4M</h2>
                            </div>
                        </div>
                        <div class="social-user-right-view"> > 3M </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="dot-border"></div>
        <div class="col-12">
            <div class="row justify-content-end position-relative">
                <div class="col-xl-6 col-lg-5 col-md-4">
                    <div class="new__social-user-main-parent">
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div
                                    class="new__social-user-img new__social-user-img-see-more new__social__after social-user-img new__social-user-img-rotate">
                                    <h5>See more</h5>
                                    <div class="new__see-more-card-main-parent">
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="new__see-more-card-parent">
                                            <div class="new__see-more-card-child">
                                                <div class="new__see-more-card-img">
                                                    <img src="assets/images/testimonial (1).jpg" alt="">
                                                </div>
                                                <div class="new__see-more-card-content">
                                                    <h3>Tom Hawck</h3>
                                                    <h5>IT Solution Company</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur
                                                        adipisicing elit. Nemo id modi, culpa assumenda
                                                        ex ullam mollitia optio minima commodi! Illo
                                                        quibusdam sed molestias repellendus obcaecati
                                                        expedita enim vel veniam repudiandae? Lorem
                                                        ipsum dolor sit</p>
                                                    <ul>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-youtube"></i><span
                                                                    class="youtube-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-twitter"></i><span
                                                                    class="twitter-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-instagram"></i><span
                                                                    class="instagram-count">3.5</span>k</a>
                                                        </li>
                                                        <li><a href=""><i
                                                                    class="fa-brands fa-facebook-f"></i><span
                                                                    class="facebook-count">3.5</span>k</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h3 class="vis-hidden"><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img" data-name="Tom Hawck"
                                    data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img new__social-user-img-rotate"
                                    data-name="Tom Hawck" data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                        <div class="new__social-user-parent">
                            <div class="new__social-user-child">
                                <div class="new__social-user-img social-user-img" data-name="Tom Hawck"
                                    data-title="Tech Company"
                                    data-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor ">
                                    <img src="assets/images/testimonial (1).jpg" alt="">

                                </div>
                            </div>
                            <h3><span>4.2</span>M</h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7 col-md-8">
                    <div class="social-user-main-parent">
                        <div class="social-user-parent">
                            <div class="social-user-img" data-name="Arman" data-title="Solution Company"
                                data-content="dolor sit amet consectetur adipisicing elit. Nemo id modi, culpa assumenda ex ullam mollitia optio minima commodi! Illo quibusdam sed molestias repellendus obcaecati expedita enim vel veniam repudiandae? Lorem ipsum dolor"
                                data-fb-count="4.5" data-inst-count="4.5" data-twt-count="4.5"
                                data-yt-count="4.5">
                                <img src="assets/images/testimonial (3).jpg" alt="">
                            </div>
                            <div class="social-user-content">
                                <h2>4.4M</h2>
                            </div>
                        </div>
                        <div class="social-user-right-view"> > 3M </div>
                    </div>
                </div>
            </div>
        </div>`);
    });

    //See More Other div hidden 

    
    if ($(window).width() < 576) {
        $(".new__social-user-img-see-more").on("click", function() {
            $(".new__social-user-img-see-more").css("display", 'none');
            $(this).css("display", 'flex');
        });
     }

    
})