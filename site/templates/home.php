<?php snippet('head') ?>

	<main>
		<?php echo $page->intro()->kirbytext() ?>

		<div>
			<?php $tags = $pages->find('/projects')->children()->visible()->pluck('category', ',', true); ?>
			<?php foreach($tags as $tag): ?>
		   	<a href="<?php echo url('/tag:' . $tag)?>">
		   		<?php echo html($tag) ?>
				</a>
			<?php endforeach ?>
		</div>

		<?php foreach(page('projects')->children()->visible() as $project): ?>
	      <figure class="project<?php if($project->previewSize() == 'half'): ?> project__half<?php endif?>">
				<?php foreach($project->images() as $image): ?>
				<?php if($image->cover() == 'ja'): ?>
				<a href="<?php echo $project->url() ?>/">
					<img src="<?php echo $image->url() ?>" alt="<?php echo html($project->title()) ?>"/>
				</a>
				<?php endif ?>
				<?php endforeach ?>
	            <figcaption class="projects__item--title">
	            	<span><?php echo html($project->category()) ?></span>
	            	<a href="<?php echo $project->url() ?>/">
	            		<?php echo html($project->title()) ?>
	         		</a>
	            </figcaption>
	        </figure>
	    <?php endforeach ?>
	</main>

<?php echo js('assets/scripts/home.min.js') ?>
<?php snippet('footer') ?>